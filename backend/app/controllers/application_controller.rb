class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'

  get '/blogs' do
    blogs = Blog.all.order(:created_at)
    blogs.to_json(:include => :author)
  end

  get '/blogs/:id' do
    blog = Blog.find(params[:id])
    blog.to_json(:include => :author)
  end




  post '/blogs' do

    author = Author.find_or_create_by(name: params[:author])
    
    blog = Blog.create(title: params[:title], body: params[:body], author_id: author.id)
    blog.author = author
    
    blog.to_json(:include => :author)
  end

  delete '/blogs/:id' do
    blog = Blog.destroy(params[:id])
    blog.to_json
  end


  patch '/blogs/:id' do
    blog = Blog.find(params[:id])
    blog.update(title: params[:title], body: params[:body])
    blog.to_json
  end




end
