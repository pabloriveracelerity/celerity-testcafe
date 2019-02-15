import { Selector } from 'testcafe';

fixture `Celerity Website Test`
    .page `file:///Users/privera/Documents/code/js/celerity-testcafe/index.html`;

test('Test page title is Celerity - The Digital Integrator', async t => {
    await t
        .expect(Selector("title").innerText).eql('Celerity - The Digital Integrator')
});
