class Todo < ActiveRecord::Base
  class << self
    def recent
      order('created_at DESC')
    end
  end
end
