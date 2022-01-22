/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorit-restourant');
});
const firstCondition = 'You dont have any Favorite Restaurant.';

Scenario('showing empty favorite restaurant', ({ I }) => {
  I.seeElement('#posts');
  I.see(firstCondition, '#posts');
});

Scenario('like one restaurant', async ({ I }) => {
  I.see(firstCondition, '#posts');

  I.amOnPage('/');

  I.seeElement('.post-card .card-body .btn-link');
  const firstCard = locate('.btn-link').first();
  const firstCardButton = await I.grabTextFrom(firstCard);
  I.click(firstCard);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorit-restourant');
  I.seeElement('.post-card .card-body .btn-link');
  const likedCardButton = await I.grabTextFrom('.btn-link');

  assert.strictEqual(firstCardButton, likedCardButton);
});

Scenario('unlike one restaurant', async ({ I }) => {
  I.see(firstCondition, '#posts');

  I.amOnPage('/');

  I.seeElement('.post-card .card-body .btn-link');
  const firstCard = locate('.btn-link').first();
  const firstCardButton = await I.grabTextFrom(firstCard);
  I.click(firstCard);
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorit-restourant');
  I.seeElement('.post-card .card-body .btn-link');
  const likedCardButton = await I.grabTextFrom('.btn-link');

  assert.strictEqual(firstCardButton, likedCardButton);

  I.click(firstCardButton);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorit-restourant');
  I.seeElement('#posts');
  const noFavRestaurant = await I.grabTextFrom('#posts');
  assert.strictEqual(noFavRestaurant, firstCondition);
});

Scenario('Customer review', async ({ I }) => {
  I.see(firstCondition, '#posts');

  I.amOnPage('/');

  I.seeElement('.post-card .card-body .btn-link');
  I.click(locate('.post-card .card-body .btn-link').first());

  I.seeElement('.form-review form');

  const textReview = 'Review from E2E testing';
  I.fillField('name', 'Dikhi Achmad');
  I.fillField('review', textReview);

  I.click('#submit');

  const lastReview = locate('.card-desc').last();
  const textLastReview = await I.grabTextFrom(lastReview);

  assert.strictEqual(textReview, textLastReview);
});
