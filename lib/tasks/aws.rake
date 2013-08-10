require 'fileutils'

namespace :aws do
  task :prepare do
    Dir.glob("#{Rails.root.join('public', 'assets')}/*.gz").each do |f|
      FileUtils.rm(f)
    end

    Dir.glob("#{Rails.root.join('public', 'assets')}/*").each do |f|
      new_file = f.gsub(/(.+)-.+\./,'\1.')
      FileUtils.mv(f, new_file) unless new_file == f
    end
  end
end
