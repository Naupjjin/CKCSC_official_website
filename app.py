from flask import Flask,render_template

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

if __name__ == "__main__":
    app.run(debug=True)
