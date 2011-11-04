var TodoTemplate = function(todo) {
  return todo.description +
  ' <a href="#" class="edit">Edit</a>' +
  '<form class="form-stacked"><label>Description<br/>' +
  '<input type="text" name="description" ' +
  'value="' + todo.description + '"/>' +
  '<input type="submit" class="btn primary" value="Save"></form>';
};
