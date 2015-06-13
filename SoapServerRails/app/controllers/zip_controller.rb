require 'savon'

class ZipController < ApplicationController
  include Concerns::ZipConcern

  def show

    @zip = params[:zip_code] || "10004"  # enter a zip or default to NYC
    @data = retrieve_zip @zip
    #puts @data.as_json
    render json: @data.as_json
  end
end