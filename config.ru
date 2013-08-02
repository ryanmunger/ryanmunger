# Static Routes
require File.expand_path('../rack_try_static', __FILE__)
use ::Rack::TryStatic, root: 'build', urls: ['/'], try: ['.html', 'index.html', '/index.html']
