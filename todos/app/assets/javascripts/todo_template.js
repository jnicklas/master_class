var TodoTemplate = function(todo) {
  return todo.description +
  ' <a href="#" class="edit">Edit</a>' +
  '<form><label>Description<br/>' +
  '<input type="text" name="description" ' +
  'value="' + todo.description + '"/>' +
  '<input type="submit" value="Save"></form>';
};
