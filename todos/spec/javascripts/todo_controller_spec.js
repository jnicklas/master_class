require('/assets/jquery.js');
require('/assets/todo.js');
require('/assets/todo_controller.js');
require('/assets/todo_template.js');

describe('TodoController', function() {
  beforeEach(function() {
    $('#test').append('<ul id="todos"></ul>');
    this.todo = new Todo({description: 'Buy milk'})
    this.todoControler = new TodoController(this.todo);
    spyOn(this.todo, 'save');
  });

  it('appends a todo item to the list of items', function() {
    expect($('#todos .task:contains("Buy milk")').length > 0).toBeTruthy()
  });

  it('hides form by default', function() {
    expect(this.todoControler.form.css('display')).toEqual('none');
  });

  describe('#field', function() {
    it('finds the field', function() {
      expect(this.todoControler.field.val()).toEqual('Buy milk');
    });
  });

  describe('#submit', function() {
    it('updates the todo item', function() {
      this.todoControler.field.val('new description');
      this.todoControler.submit();
      expect(this.todoControler.todo.description).toEqual('new description');
    });

    it('re-renders the form', function() {
      spyOn(this.todoControler, 'render');
      this.todoControler.submit();
      expect(this.todoControler.render).toHaveBeenCalled();
    });

    it('saves the todo item', function() {
      this.todoControler.submit();
      expect(this.todo.save).toHaveBeenCalled();
    });
  });

  describe('#edit', function() {
    it('shows the form', function() {
      this.todoControler.edit();
      expect(this.todoControler.form.css('display')).toEqual('block');
    });
  });
});
