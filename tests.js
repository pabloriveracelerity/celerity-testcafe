import { Selector, RequestMock } from 'testcafe';

fixture `Celerity Website Test: Index page`
    .page `https://celerity.com`;

const pageTitle = 'Celerity - The Digital Integrator';


test('Test page title is Celerity - The Digital Integrator', async t => {
    await t
        .expect(Selector("title").innerText).eql(pageTitle)
});

test('Celerity Twitter feed loads latest official account tweet', async t => {
    await t
	.expect(Selector('.ctf-tweet-text').innerText).contains('Did you know that understanding cognitive biases')
});

test('Navigation menu is hidden when viewed by mobile sized screen', async t => {
    const menu = Selector('.mega-menu');

    await t
        .resizeWindow(375, 667) //iphone 6/7/8 screen size
        .expect(menu.getStyleProperty('display')).eql('none');
});
