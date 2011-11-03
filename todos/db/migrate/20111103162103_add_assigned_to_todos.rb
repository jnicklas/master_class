class AddAssignedToTodos < ActiveRecord::Migration
  def change
    add_column :todos, :assigned, :string
  end
end
