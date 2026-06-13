Run a MongoDB command against the project database.

Read MONGO_URL from `c:\dev\resume\.env`, then execute the provided eval script using:
`& "C:\Program Files\MongoDB\Server\4.4\bin\mongo.exe" $mongoUrl --eval $script`

The argument to this command is the JavaScript expression to pass as `--eval`. If no argument is given, ask the user what they want to run.

Example: `/mongo db.tenthings.find({ platform: "discord" }).pretty()`
