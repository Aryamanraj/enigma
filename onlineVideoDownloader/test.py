import requests
import m3u8
url = 'https://www.divicast.com/movie/watch-bajrangi-bhaijaan-2015-online-free-13145'
r=requests.get(url)
print(r.text)
# m3u8_master = m3u8.load(r.text)
# playlist_url = m3u8_master.data['playlists'][0]['uri']
# r = requests.get(playlist_url)
# playlist = m3u8.loads(r.text)
# playlist.data['segments'][0]['uri']
# r = requests.get(playlist.data['segments'][0]['uri'])

# with open('vid1.ts', 'wb') as f:
#     for segment in playlist.data['segments']:
#         url = segment['uri']
#         r = requests.get(url)
#         f.write(r.content)

# import subprocess
# subprocess.run(['ffmpeg','-i','vid1.ts','vid1.mp4'])

blob:https://rabbitstream.net/e1308e63-e9d9-46ad-9d34-d38fb4b00998

ffmpeg -i 'https://url/to/some/file.m3u8' -bsf:a aac_adtstoasc \
    -vcodec copy -c copy -crf 50 file.mp4