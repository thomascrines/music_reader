class Song < ActiveRecord::Base
  belongs_to :user

  has_many :favourite_songs
  has_many :favourited_by, through: :favourite_songs, source: :user
end