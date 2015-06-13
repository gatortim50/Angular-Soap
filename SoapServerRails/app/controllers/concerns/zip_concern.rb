module Concerns
  module ZipConcern

    def retrieve_zip zip

      client = Savon.client(wsdl: 'http://www.webservicex.net/uszip.asmx?wsdl'
          #log: true, # set true to switch on logging
          #log_level: :debug,
          #pretty_print_xml: true
        )

      @data = response = client.call(:get_info_by_zip, message: {"USZip"=>zip})

    end

  end
end