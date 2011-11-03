require 'spec_helper'

describe Todo do
  describe ".recent" do
    it "returns a list of todos ordered by most recent" do
      @todo1 = Todo.create(:created_at => 2.days.ago)
      @todo2 = Todo.create(:created_at => 1.day.ago)
      @todo3 = Todo.create(:created_at => 3.days.ago)

      Todo.recent.should == [@todo2, @todo1, @todo3]
    end
  end
end
