import { Selector, RequestMock } from 'testcafe';

/*

These tests target index.html

*/

fixture `Celerity Website Test`
    .page `file:///Users/privera/Documents/code/js/celerity-testcafe/index.html`;

const pageTitle = 'Celerity - The Digital Integrator';

/*

This bit is to intercept ajax requests and mock a response.
Not really used in these tests. Only done as an example.

If the page had any content loaded through AJAX, this would be the way
to mock the content.

*/
const mock = RequestMock()
    .onRequestTo('https://www.celerity.com/wp-admin/admin-ajax.php')
      .respond({
	  pageTitle: pageTitle
      }, 200, {
        'access-control-allow-origin': '*'
    });



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
