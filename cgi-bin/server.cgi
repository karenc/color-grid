#!/usr/bin/env python

import cgi
import cgitb; cgitb.enable()
import os

def read(params):
    print 'Content-Type: application/json\r\n\r'
    print '[{"color": "red", "position": 0, "id": 0}, {"color": "blue", "position": 1, "id": 1}]'

methods = [
        ('read', read),
        ]

def main():
    params = cgi.parse_qs(os.getenv('QUERY_STRING'))
    try:
        method = params.pop('method')[0]
    except:
        method = None
    if method:
        for m, handler in methods:
            if method == m:
                return handler(params)

    print 'Content-Type: text/plain\r\n\r'
    print 'Not implemented'

if __name__ == '__main__':
    main()
