import cv2
import numpy as np
import pytesseract
import os
import time
from interruptingcow import timeout

# get grayscale image
def get_grayscale(image):
    return cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

# noise removal
def remove_noise(image):
    return cv2.medianBlur(image,5)
 
#thresholding
def thresholding(image):
    return cv2.threshold(image, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)[1]

#dilation
def dilate(image):
    kernel = np.ones((5,5),np.uint8)
    return cv2.dilate(image, kernel, iterations = 1)
    
#erosion
def erode(image):
    kernel = np.ones((5,5),np.uint8)
    return cv2.erode(image, kernel, iterations = 1)

#opening - erosion followed by dilation
def opening(image):
    kernel = np.ones((5,5),np.uint8)
    return cv2.morphologyEx(image, cv2.MORPH_OPEN, kernel)

#canny edge detection
def canny(image):
    return cv2.Canny(image, 100, 200)

#skew correction
def deskew(image):
    coords = np.column_stack(np.where(image > 0))
    angle = cv2.minAreaRect(coords)[-1]
    if angle < -45:
        angle = -(90 + angle)
    else:
        angle = -angle
    (h, w) = image.shape[:2]
    center = (w // 2, h // 2)
    M = cv2.getRotationMatrix2D(center, angle, 1.0)
    rotated = cv2.warpAffine(image, M, (w, h), flags=cv2.INTER_CUBIC, borderMode=cv2.BORDER_REPLICATE)
    return rotated

#template matching
def match_template(image, template):
    return cv2.matchTemplate(image, template, cv2.TM_CCOEFF_NORMED)

# #Importing from json
# with open("url.json") as file:
#     data = json.load(file)

#leftIndex = []
# listOfAllFiles = os.listdir('./download')
# maxLeftIndex = max(listOfAllFiles)
#leftIndex.append(listOfAllFiles[:dotIndex])
for i in os.listdir('./download'):
    try:
        tt = time()
        with timeout(12,exception = RuntimeError):

    #Image loading
            image = cv2.imread('./download/'+ str(i))
    #Image data printing on different modes
            custom_config = r'--oem 3 --psm 6'
            aOfImage = str(pytesseract.image_to_string(image, config=custom_config))

            bOfImage = str(pytesseract.image_to_string(image, config=custom_config))

            cOfImage = str(pytesseract.image_to_string(image, config=custom_config))

            dOfImage = str(pytesseract.image_to_string(image, config=custom_config))

            j = os.path.splitext(i)[0]
            newfile = open("./textData/" + str(j) + ".txt", 'w')
            newfile.write(aOfImage + "\n" + bOfImage + "\n" + cOfImage + "\n" + dOfImage)
            newfile.close()
    except RuntimeError:
        pass

    

    


# from PIL import Image
# import pytesseract as pyt
# image_file = './download/7.97717967458194.jpg'
# im = Image.open(image_file)
# text = pyt.image_to_string(image_file)
# print (text)