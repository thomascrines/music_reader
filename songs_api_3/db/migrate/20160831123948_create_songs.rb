class CreateSongs < ActiveRecord::Migration
  def change
    create_table :songs do |t|
      t.string :title
      t.string :composer
      t.string :date
      t.string :imagePath
      t.string :imageCount

      t.timestamps null: false
    end
  end
end
