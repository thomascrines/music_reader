class SongsController < ApplicationController
  before_action :authenticate_user!
  
  def index
    render :json => Song.all
  end

  def create
    render json: Song.create( song_params ), status: :created
  end


  private
  def song_params
    params.require(:song).permit([:title, :composer, :date, :piece, :images])
  end

end
