import { Selector, RequestMock } from 'testcafe';

/*

These tests target mock.html

*/

fixture `Mock Tests`
    .page `http://localhost:5000/`;


const mock = RequestMock()
      .onRequestTo('http://localhost:5000/api')
      .respond(
	  {
          headline: "The test worked!",
	  paragraph: "Go take a break and play some Titanfall 2 ..."
          },
	  200,
	  {
	      'access-control-allow-origin': '*',
	      'content-type': 'application/json'
	  }
      );


test('Test page headline shows the mock request data', async t => {
    const clickMeButton = Selector('#click-me-button');
    const headline = Selector('#headline');

    await t
        .click(clickMeButton)
        //.debug();
        .expect(headline.innerText).contains('The test worked')
	//.debug();
});
