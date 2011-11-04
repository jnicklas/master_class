!SLIDE

# Let's create a simple model

    @@@javascript
    require('/assets/todo.js');

    describe('Todo', function() {
      it('stores the description', function() {
        var todo = new Todo({description: 'Buy milk'})
        expect(todo.description).toEqual('Buy milk');
      });
    });

!SLIDE

# Let's implement it

    @@@javascript
    var Todo = function(attributes) {
      this.description = attributes.description
    };
