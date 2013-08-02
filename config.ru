# encoding: utf-8

# Redirects
require 'rack/rewrite'

use ::Rack::Rewrite do
  r301 %r{\A/([\d\(\)\-\+ %]+)/?}, "#{root}/$1"
end

# Display 404
run lambda {
  not_found_page = File.expand_path("../build/404.html", __FILE__)
  if File.exist?(not_found_page)
    [ 404, { 'Content-Type' => 'text/html'}, [File.read(not_found_page)] ]
  else
    [ 404, { 'Content-Type' => 'text/html' }, ['Page Not Found'] ]
  end
}
