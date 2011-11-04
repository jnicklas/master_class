require('/assets/todo.js');

describe('Todo', function() {
  it('stores the description', function() {
    var todo = new Todo({description: 'Buy milk'})
    expect(todo.description).toEqual('Buy milk');
  });
});
