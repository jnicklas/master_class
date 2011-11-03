class TodosController < ApplicationController
  def index
    @todos = Todo.recent
  end

  def create
    Todo.create(params[:todo])
    redirect_to :todos, :notice => 'Created a todo item'
  end

  def update
    Todo.find(params[:id]).update_attributes(params[:todo])
    redirect_to :todos, :notice => 'Updated todo item'
  end
end
