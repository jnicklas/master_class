!SLIDE code small

# Spec out the controller

    @@@javascript
    require('/assets/jquery.js');
    require('/assets/todo.js');
    require('/assets/todo_controller.js');

    describe('TodoController', function() {
      it('appends a todo item to the list of items', function() {
        $('#test').append('<ul id="todos"></ul>');
        var todo = new Todo({description: 'Buy milk'})
        var todoControler = new TodoController(todo);
        var match = $('#todos .todo:contains("Buy milk")');
        expect(match.length > 0).toBeTruthy()
      });
    });

!SLIDE code small

# Implement it

    @@@javascript
    var TodoController = function(todo) {
      this.element = $('<li class="todo"></li>').appendTo('#todos');
      this.element.text(todo.description);
    };
