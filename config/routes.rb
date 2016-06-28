Rails.application.routes.draw do
  devise_for :users

  root 'keep#index'
end
