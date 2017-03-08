# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Todo.create!({title: "wash car", body: "with soap", done: true})
Todo.create!({title: "wash dog", body: "with shampoo", done: false})
Todo.create!({title: "paint the car", body: "with paint", done: false})
