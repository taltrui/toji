import { ActionIcon, Box, Text, TextProps, Tooltip } from "@mantine/core";
import { IconCopy } from "@tabler/icons-react";
import { copyToClipboard } from "../../utils/copy";
import { useState } from "react";

const TextWithCopy = ({ children, ...props }: { children: string } & TextProps) => {
    const [copied, setCopied] = useState(false);

    const onCopy = () => {
        try {
            copyToClipboard(children);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
        catch (error) {
            console.error("Error copying to clipboard", error);
        }
    }

    return (
        <Box style={{
            display: "flex",
            alignItems: "center",
        }}>

            <Text {...props}>{children}</Text>
            <Tooltip label={copied ? "¡Copiado!" : 'Copiar'}>
                <ActionIcon onClick={onCopy} size="sm" variant="transparent" style={{ marginLeft: 8 }}><IconCopy /></ActionIcon>
            </Tooltip>
        </Box>
    );
}

export default TextWithCopy;