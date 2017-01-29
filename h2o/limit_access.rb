Proc.new do |env|
  # HTTPの時はHTTPSへリダイレクトさせる
  if env["rack.url_scheme"] == "http"
    [301, {"Location" => "https://#{env['HTTP_HOST']}#{env['PATH_INFO']}"}]
  end
end