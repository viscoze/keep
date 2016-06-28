class CreateListItems < ActiveRecord::Migration
  def change
    create_table :list_items do |t|
      t.integer :list_id
      t.string :content
      t.boolean :checked

      t.timestamps null: false
    end
  end
end
