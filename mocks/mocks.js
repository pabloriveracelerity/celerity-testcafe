import { Selector, RequestMock } from 'testcafe';

/*

These tests target mock.html

*/

fixture `Mock Tests`
    .page `http://localhost:5000/`;



const jsonResponse = {headline: "Mocking worked.", paragraph: "Take a break cause mocking worked ..."};

const mock = RequestMock()
      .onRequestTo('http://localhost:5000/api')
      .respond(jsonResponse, 200,
	  {
	      'access-control-allow-origin': '*',
	      'content-type': 'application/json'
	  }
      );


test
    .requestHooks(mock)
    ('Test page headline shows the mock request data', async t => {
    const clickMeButton = Selector('#click-me-button');
    const headline = Selector('#headline');

    await t
        .click(clickMeButton)
        //.debug();
        .expect(headline.innerText).contains(jsonResponse.headline)
	    .expect(paragrapha.innerText).contains(jsonResponse.paragraph)
});
