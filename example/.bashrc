# If not running interactively, don't do anything
case $- in
    *i*) ;;
      *) return;;
esac

# load aliases if specified in separate file
if [ -f ~/.bash_aliases ]; then
	source ~/.bash_aliases
fi


if [ -x /usr/bin/dircolors ]; then
    alias ls='ls --color=auto'
    alias dir='dir --color=auto'
    alias vdir='vdir --color=auto'
    alias grep='grep --color=auto'
    alias fgrep='fgrep --color=auto'
    alias egrep='egrep --color=auto'
fi

show_git() {
	git branch 2> /dev/null | sed -e '/^[^*]/d' -e 's/* \(.*\)/ (\1)/'
}

# Prompt
# Prompt colors:
# 30-37 foreground
# 40-47 background
# 90-97 high intensity foreground
# 100-107 high intensity background
#
# 0 - Black
# 1 - Red
# 2 - Green
# 3 - Yellow
# 4 - Blue
# 5 - Purple
# 6 - Cyan
# 7 - White
#
# Bold bit:
# 0 - Normal
# 1 - Bold
#
# format: \[\e[BOLD_BIT;COLOR\]
function prompt {
	local BLACK="\[\e[0;30m\]"
	local BLACKBOLD="\[\e[1;30m\]"
	local RED="\[\e[0;31m\]"
	local REDBOLD="\[\e[1;31m\]"
	local REDLIGHT="\[\e[1;91m\]"
	local GREEN="\[\e[0;32m\]"
	local GREENBOLD="\[\e[1;32m\]"
	local GREENLIGHT="\[\e[0;92m\]"
	local YELLOW="\[\e[0;33m\]"
	local YELLOWBOLD="\[\e[1;33m\]"
	local BLUE="\[\e[0;34m\]"
	local BLUEBOLD="\[\e[1;34m\]"
	local BLUELIGHT="\[\e[0;94m\]"
	local PURPLE="\[\e[0;35m\]"
	local PURPLEBOLD="\[\e[1;35m\]"
	local CYAN="\[\e[0;36m\]"
	local CYANBOLD="\[\e[1;36m\]"
	local WHITE="\[\e[0;37m\]"
	local WHITEBOLD="\[\e[1;37m\]"
	local RESET="\[\e[0m\]"

	export PS1="$GREENLIGHT\u@\h$RESET:[$BLUELIGHT\w$RESET]$REDLIGHT\$(show_git)$RESET $ "
}

prompt