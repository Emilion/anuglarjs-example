describe('ExampleApp', function () {
    it('should have title', function () {
        browser.get('http://localhost:3000');

        expect(browser.getTitle()).toEqual('AngularJS example');
    })
})