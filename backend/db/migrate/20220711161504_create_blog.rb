class CreateBlog < ActiveRecord::Migration[6.1]
  def change
    create_table :blogs do |t|
      t.string :body
      t.string :title
      t.integer :author_id
      t.timestamps
    end
  end
end
