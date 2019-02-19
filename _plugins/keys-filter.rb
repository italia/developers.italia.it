module Jekyll
  module KeysFilter
    def keys(input)
      input.keys
    end
    def objects_keys(input)
      # Given an array of objects, it returns the keys of such objects
      (input.map { |item| item.keys }).flatten
    end
  end
end

Liquid::Template.register_filter(Jekyll::KeysFilter)
