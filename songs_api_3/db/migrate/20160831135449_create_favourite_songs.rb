class CreateFavouriteSongs < ActiveRecord::Migration
  def change
    create_table :favourite_songs do |t|
      t.integer :song_id
      t.integer :user_id

      t.timestamps null: false
    end
  end
end
