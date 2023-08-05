from flask import Flask,render_template,send_from_directory,request,redirect,url_for

app=Flask(__name__)


@app.route("/")
def home():
    return render_template("home.html")

@app.route("/club_introduce")
def club_introduce():
    return render_template("club_introduce.html")

@app.route("/slides")
def slides():
    return render_template("slides.html")

@app.route("/class_introduce")
def class_introduce():
    return render_template("class_introduce.html")

@app.route("/cadre_introduction")
def cadre_introduction():
    return render_template("cadre_introduction.html")

#########################################################
#ckcscCTF2

@app.route("/robots.txt")
def WEB2():
    return send_from_directory(app.static_folder,"CTF/robots.txt")

@app.route("/Q0tDU0MzNl9JIExPVkUgQ1RGLkJ5IE5hdXBKamluLg")
def WEB2_flag():
    return render_template("flag2.html")

#########################################################
#ckcscCTF3
@app.route("/Y2tjc2NDVEYz",methods=["POST","GET"])
def Y2tjc2NDVEYz():
    return render_template("ckcscCTF_flag3.html")

@app.route("/send_flag",methods=["POST","GET"])
def send_flag3():

    if request.method=="POST":
        return render_template('flag3.html')
    return redirect(url_for('home'))
#########################################################

if __name__ == "__main__":
    app.run(host="0.0.0.0",port="8080",debug=True)
