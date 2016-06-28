class CreateLists < ActiveRecord::Migration
  def change
    create_table :lists do |t|
      t.belongs_to :user_id, index: true, foreign_key: true
      t.string :title

      t.timestamps null: false
    end
  end
end
