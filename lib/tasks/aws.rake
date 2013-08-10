require 'fileutils'

namespace :aws do
  task :prep do
    Rake::Task["assets:precompile"].invoke

    Dir.glob("#{Rails.root.join('public', 'assets')}/*.gz").each do |f|
      FileUtils.rm(f)
    end

    Dir.glob("#{Rails.root.join('public', 'assets')}/*").each do |f|
      new_file = f.gsub(/(.+)-.+\./,'\1.')
      FileUtils.mv(f, new_file) unless new_file == f
    end
  end

  task :rm do
    Dir.glob("#{Rails.root.join('public', 'assets')}/*").each do |f|
      FileUtils.rm(f)
    end
  end
end
