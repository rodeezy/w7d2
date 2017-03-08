Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  root to: "static_pages#root"

  namespace :api, defaults: {format: :json} do
    resources :todos, only: [:index, :create, :show, :update, :destroy]
  end

end
