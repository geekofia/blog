if [[ -z "$1" || $1 == "" ]]; then
    echo "[Open Signal] REST_API_KEY is not provided or empty";
elif [[ -z "$2" || $2 != "yes" ]]; then
    echo "[Blog] No new posts added: Not sending push notificaction";
else
    echo "[Blog App] Sending push notification for new post ...";
    curl --include \
        --request POST \
        --header "Content-Type: application/json; charset=utf-8" \
        --header "Authorization: Basic $1" \
        --data-binary @create_notification.json \
        https://onesignal.com/api/v1/notifications;
fi