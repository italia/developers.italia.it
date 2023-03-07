require 'i18n'

module Jekyll
  module LocalizedDates
    def localize(input, locale, format=nil)
      load_translations
      format = (format =~ /^:(\w+)/) ? $1.to_sym : format
      I18n.l input, :format => format, :locale => locale
    end

    def load_translations
      unless I18n::backend.instance_variable_get(:@translations)
        I18n.backend.load_translations Dir[File.join(File.dirname(__FILE__),'../_data/l10n.yml')]
      end
    end
  end
end

Liquid::Template.register_filter(Jekyll::LocalizedDates)
