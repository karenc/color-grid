#!/usr/bin/env python

def main():
    print '200 OK'
    print 'Content-Type: application/json\r\n\r'
    print '[{"color": "red", "position": 0, "id": 0}, {"color": "blue", "position": 1, "id": 1}]'

if __name__ == '__main__':
    main()
