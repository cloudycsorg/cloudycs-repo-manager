from aws_cdk import (
    Duration,
    Stack,
    aws_iam as iam,
    aws_sqs as sqs,
    aws_sns as sns,
    aws_sns_subscriptions as subs,
)
from constructs import Construct

class TestCdkProjectStack(Stack):

    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:
        super().__init__(scope, construct_id, **kwargs)

        # Example: Create an SQS queue
        queue = sqs.Queue(
            self, "TestCdkProjectQueue",
            visibility_timeout=Duration.seconds(300),
        )

        # Example: Create an SNS topic
        topic = sns.Topic(
            self, "TestCdkProjectTopic"
        )

        # Example: Subscribe the queue to the topic
        topic.add_subscription(subs.SqsSubscription(queue))
