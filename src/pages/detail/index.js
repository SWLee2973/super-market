import '/src/styles/style.scss';
import {
  getNode,
  getNodes,
  initHeader,
  comma,
  hideElementNoExist,
  getPbImageURL,
  insertBefore,
  insertLast,
  handleAddCartDetail,
  getStorage,
} from '/src/lib';
import pb from '/src/lib/api/pocketbase.js';

const zzimButton = getNode('.zzim');
const notifyButton = getNode('.notify');
const countDecrease = getNode('.decrease');
const countIncrease = getNode('.increase');
const productCount = getNode('.count');
const optionPrice = getNode('.product-option-price');
const totalPrice = getNode('.product-total-price');
const detailNavMenu = getNodes('.detail-navigation-list li');
const navItem = getNodes('.nav-item');
const addCart = getNode('.add-cart');
const writeReview = getNode('.write-review');
const reviewDialog = getNode('.review-dialog');
const dialogWrite = getNode('.dialog-write');
const dialogCancel = getNode('.dialog-cancel');
const detailReward = getNodes('.detail-rewards');

let isClick;

initHeader();
hideElementNoExist();

const fillTagContent = (target, value, element = 'textContent') => {
  getNode(target)[element] = value;
};
const renderDetailData = async () => {
  console.log('renderDetailData start');
  const hash = window.location.hash.slice(1);
  const detailData = await pb.collection('products').getOne(hash);
  let {
    delivery_type,
    product_name,
    packaging_type,
    price,
    discount,
    product_description,
    etc,
  } = detailData;

  switch (packaging_type) {
    case '1':
      packaging_type = '상온';
      break;
    case '2':
      packaging_type = '냉장';
      break;
    case '3':
      packaging_type = '냉동';
      break;
  }
  const realPrice = comma(
    Math.floor((price * (1 - 0.01 * discount)) / 10) * 10
  );
  fillTagContent(
    '.main-image',
    getPbImageURL(detailData, 'product_img'),
    'src'
  );
  fillTagContent('.main-image', product_name, 'alt');
  fillTagContent('.delivery', 'textContent', delivery_type);
  fillTagContent('.product-name', product_name);
  fillTagContent('.product-explanation', product_description);
  fillTagContent('.product__discount-rate', `${discount}%`);
  fillTagContent('.product__price', `${realPrice}원`);
  fillTagContent('.original-price', `${comma(price)}원`);
  fillTagContent('.product-detail-delivery p:first-child', delivery_type);
  fillTagContent('.product-detail-package p:first-child', packaging_type);
  fillTagContent('.product-option-name', product_name);
  fillTagContent('.product-option-price', `${realPrice}원`);

  fillTagContent('.product-total-price', `${realPrice}`);
  fillTagContent(
    '.product-description.nav-item img',
    getPbImageURL(detailData, 'product_detail_img'),
    'src'
  );
  fillTagContent('.sr-only h3', `${product_name} 제품설명`);

  for (let key in etc) {
    insertBefore(
      '.product-option-row',
      `
    <dt>${key}</dt>
              <dd><p>${etc[key]}</p></dd>
    `
    );
  }
};

const handleButton = (target) => {
  isClick = !target.classList.contains('is--active');
  target.classList.toggle('is--active');
};

const handleLike = () => {
  handleButton(zzimButton);
  console.log(`찜 : ${isClick}`);
};

const handleNotify = () => {
  handleButton(notifyButton);
  console.log(`알림 : ${isClick}`);
};

const setRewards = async () => {
  const { isAuth, user } = await getStorage('auth');
  if (isAuth) {
    detailReward.forEach((element) => {
      element.textContent = '구매시, 5원 적립';
    });
  }
  console.log(isAuth, detailReward);
};
setRewards();

const handleCount = async (e) => {
  if (!e) return;
  let value = e.target.value;
  let count = +productCount.value;
  if (value === '-') {
    count -= 1;
  } else {
    count += 1;
  }
  productCount.value = count;

  if (productCount.value <= 0) {
    alert('최소수량은 1개입니다.');
    productCount.value = 1;
  }

  showTotalPrice();
};

const showTotalPrice = () => {
  let productPrice = +optionPrice.innerText.replace(/\D/g, '');
  return (totalPrice.innerText = comma(productPrice * productCount.value));
};

const handleDetailNav = () => {
  if (!navItem) return; // Error: navItem이 없는데...?

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let currentItemId = entry.target.id;

        const setLinkById = (element) => {
          element.classList.toggle(
            'is--active',
            element.firstElementChild.getAttribute('href') ===
              `#${currentItemId}`
          );
        };
        detailNavMenu.forEach(setLinkById);
      }
    });
  });

  navItem.forEach((section) => {
    observer.observe(section);
  });
};

const show = (target) => {
  target.showModal();
};

const close = (target) => {
  target.close();
};

// if (review && reviewSubject !== null) {
//   dialogWrite.classList.add('is--active');
// }

const handleReview = async () => {
  const { user } = await getStorage('auth');
  const productId = window.location.hash.slice(1);
  const reviewSubject = getNode('#review-subject').value;
  const review = getNode('#review-text').value;

  const reviewData = {
    board_type: 2,
    user_id: `${user.id}`,
    product_id: `${productId}`,
    review_subject: `${reviewSubject}`,
    review: `${review}`,
  };

  const record = await pb.collection('review_boards').create(reviewData);

  await location.reload();
};

const listReview = async () => {
  pb.autoCancellation(false);

  const productId = window.location.hash.slice(1);
  const record = await pb.collection('review_boards').getFullList({
    filter: `product_id="${productId}"`,
    expand: 'user_id',
    sort: '-updated',
  });
  const detailData = await pb.collection('products').getOne(productId);

  record.forEach((row) => {
    const userName = row.expand.user_id.name;
    const maskingName = userName.replace(/(?<=.{1})./gi, '*');

    const template = /* html */ `
    <div class="review-row">
    <div class="subject">
      <span class="best">베스트</span>
      <span class="purple">퍼플</span>
      <p class="user-name">${maskingName}</p>
    </div>
    <article>
      <div class="option">${detailData.product_name}</div>
      <p class="review-detail">
        ${row.review}
      </p>
      <p class="date">${row.updated.slice(0, 10).replace('-', '.')}</p>
    </article>
    </div>
    `;

    insertLast('.review-board', template);
  });
};

listReview();

window.addEventListener('DOMContentLoaded', async () => {
  await renderDetailData();
});

zzimButton.addEventListener('click', handleLike);
notifyButton.addEventListener('click', handleNotify);
countDecrease.addEventListener('click', handleCount);
countIncrease.addEventListener('click', handleCount);
window.addEventListener('scroll', handleDetailNav);
addCart.addEventListener('click', handleAddCartDetail);
writeReview.addEventListener('click', () => {
  show(reviewDialog);
});
dialogCancel.addEventListener('click', () => close(reviewDialog));
dialogWrite.addEventListener('click', handleReview);
