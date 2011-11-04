!SLIDE

# Let's request some todos

    @@@javascript
    Todo.fetch = function() {
      $.ajax({
        url: '/todos.json',
        success: function(data) {
          $.each(data, function() {
            new TodoController(new Todo(this));
          });
        }
      });
    };

## We are not unit testing this

!SLIDE

## Make Rails respond
# with JSON

    @@@ruby
    def index
      @todos = Todo.recent
      respond_to do |format|
        format.html
        format.json { render :json => @todos }
      end
    end

!SLIDE

# Remove rendering
## from view

    @@@html
    <ul id="todos"></ul>

!SLIDE

# Wire it together

    @@@javascript
    $(function() { Todo.fetch() });

# Client side rendering!

