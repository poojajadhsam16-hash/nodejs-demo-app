const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>DevOps Deployment Dashboard</title>

    <style>
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
        }

        body {
            font-family: Arial, sans-serif;
            background: #f4f7fb;
            color: #1f2937;
        }

        .header {
            background: #111827;
            color: white;
            padding: 25px 40px;
        }

        .header h1 {
            font-size: 28px;
            margin-bottom: 6px;
        }

        .header p {
            color: #cbd5e1;
        }

        .container {
            max-width: 1100px;
            margin: 40px auto;
            padding: 0 20px;
        }

        .status {
            background: white;
            padding: 25px;
            border-radius: 14px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
            margin-bottom: 25px;
        }

        .online {
            color: #16a34a;
            font-weight: bold;
            font-size: 20px;
        }

        .cards {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-top: 20px;
        }

        .card {
            background: white;
            padding: 25px;
            border-radius: 14px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }

        .card h3 {
            margin-bottom: 10px;
            color: #475569;
        }

        .card p {
            font-size: 22px;
            font-weight: bold;
        }

        .pipeline {
            background: white;
            margin-top: 25px;
            padding: 30px;
            border-radius: 14px;
            box-shadow: 0 4px 15px rgba(0,0,0,0.08);
        }

        .pipeline h2 {
            margin-bottom: 25px;
        }

        .step {
            display: flex;
            align-items: center;
            gap: 15px;
            margin: 18px 0;
            font-size: 17px;
        }

        .check {
            width: 28px;
            height: 28px;
            background: #16a34a;
            color: white;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: bold;
        }

        .arrow {
            margin-left: 12px;
            color: #64748b;
        }

        .footer {
            text-align: center;
            margin-top: 35px;
            color: #64748b;
        }

        @media (max-width: 700px) {
            .cards {
                grid-template-columns: 1fr;
            }

            .header {
                padding: 20px;
            }
        }
    </style>
</head>

<body>

    <div class="header">
        <h1>☁ DevOps Deployment Dashboard</h1>
        <p>Node.js • Docker • GitHub Actions</p>
    </div>

    <div class="container">

        <div class="status">
            <h2>Application Status</h2>
            <br>
            <p class="online">● ONLINE</p>
            <p>Application is running successfully.</p>
        </div>

        <div class="cards">

            <div class="card">
                <h3>Runtime</h3>
                <p>Node.js</p>
            </div>

            <div class="card">
                <h3>Container</h3>
                <p>Docker</p>
            </div>

            <div class="card">
                <h3>CI/CD</h3>
                <p>Active</p>
            </div>

        </div>

        <div class="pipeline">

            <h2>🚀 CI/CD Pipeline</h2>

            <div class="step">
                <span class="check">✓</span>
                <span>Code Commit</span>
            </div>

            <div class="arrow">↓</div>

            <div class="step">
                <span class="check">✓</span>
                <span>Automated Tests</span>
            </div>

            <div class="arrow">↓</div>

            <div class="step">
                <span class="check">✓</span>
                <span>Docker Build</span>
            </div>

            <div class="arrow">↓</div>

            <div class="step">
                <span class="check">✓</span>
                <span>Docker Hub Push</span>
            </div>

        </div>

        <div class="footer">
            <p>Environment: Development | Port: 3000</p>
            <p>DevOps Internship - Task 1</p>
        </div>

    </div>

</body>
</html>
    `);
});

app.get("/health", (req, res) => {
    res.json({
        status: "UP"
    });
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`Application running on port ${PORT}`);
    });
}

module.exports = app;
