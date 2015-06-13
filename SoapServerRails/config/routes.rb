Rails.application.routes.draw do
  #get "zip" => "zip#show"
  get '/zip/:zip_code', to: 'zip#show'
end
