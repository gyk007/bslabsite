#!/usr/bin/env bash

SCRIPT=$( readlink -m $( type -p $0 ))
SCRIPT_PATH=`dirname ${SCRIPT}`

case "$1" in
	start)
		echo -e "Starting server port: 9099 \n"
		cd $SCRIPT_PATH && starman $SCRIPT_PATH/mail.pl --port 9099 --pid $SCRIPT_PATH/starman.pid --error-log $SCRIPT_PATH/starman_error_log --daemonize &
		tail -f $SCRIPT_PATH/starman_error_log
	;;
	stop)
		echo -e "Stoped server port: 9099 \n"
		kill $(cat $SCRIPT_PATH/starman.pid)
		tail -f $SCRIPT_PATH/starman_error_log
	;;
	restart)
		echo -e "Restarting server port: 9099 \n"
		kill $(cat $SCRIPT_PATH/starman.pid)
		cd $SCRIPT_PATH && starman $SCRIPT_PATH/mail.pl --port 9099 --pid $SCRIPT_PATH/starman.pid --error-log $SCRIPT_PATH/starman_error_log --daemonize &
		tail -f $SCRIPT_PATH/starman_error_log
	;;
	*)
		echo "Usage: $0 {start|stop|restart}"
		exit 1
	esac
exit 0